import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'

import { getTotalPrice, ParseToBRL } from '../../utils'

import InputMask from 'react-input-mask'

import * as S from './styles'
import * as Yup from 'yup'

import {
  closePurchaseSection,
  closeSideBarDelivery,
  finalizar,
  openPurchaseFuction,
  close,
  clear
} from '../../store/reducer/Cart'
import { usePurchaseMutation } from '../../service/api'
import Button from '../../components/Button'

const Delivery = () => {
  const { openDelivery, openPurchase } = useSelector(
    (state: RootReducer) => state.cart
  )
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const { openFinalizar } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

  const backHandleButtonClick = () => {
    dispatch(closeSideBarDelivery())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('*O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter no mínimo 5 caracteres')
        .required('*O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter no mínimo 5 caracteres')
        .required('*O campo é obrigatório'),
      zipCode: Yup.string().required('*O campo é obrigatório'),
      number: Yup.string().required('*O campo é obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        openPurchase ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        openPurchase ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        openPurchase ? schema.required('O campo é obrigatório') : schema
      ),
      cardMonth: Yup.string().when((values, schema) =>
        openPurchase ? schema.required('O campo é obrigatório') : schema
      ),
      cardYear: Yup.string().when((values, schema) =>
        openPurchase ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardCode),
              year: Number(values.cardYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const handleButtonClick = () => {
    form.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        dispatch(openPurchaseFuction())
      }
    })
  }

  const BackDeliveryForm = () => {
    dispatch(closePurchaseSection())
  }

  const FinishButtonClick = () => {
    dispatch(close())
    dispatch(clear())
  }

  const orderId = data?.orderId ?? 'N/A'

  useEffect(() => {
    if (isSuccess) {
      dispatch(finalizar())
    }
  }, [dispatch, isSuccess])

  const checkInputHasError = (fieldRecever: string) => {
    const isTouched = fieldRecever in form.touched
    const isInvalid = fieldRecever in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <S.SideBarDelivery
        title={'Entrega'}
        className={openDelivery ? 'isVisible' : ''}
      >
        <>
          <S.Forms onSubmit={form.handleSubmit}>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              id="receiver"
              type="text"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('receiver') ? 'error' : ''}
            />
            <label htmlFor="description">Endereço</label>
            <input
              id="description"
              type="text"
              name="description"
              value={form.values.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('description') ? 'error' : ''}
            />
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
            <S.Row>
              <div>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99999-999"
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <InputMask
                  id="number"
                  type="text"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="999"
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </div>
            </S.Row>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <Button
              type="button"
              onClick={handleButtonClick}
              title="Clique aqui para continuar com a compra"
            >
              Continuar comprando
            </Button>
            <Button
              type="button"
              onClick={backHandleButtonClick}
              title="Voltar ao carrinho"
            >
              Voltar para o carrinho
            </Button>
          </S.Forms>
        </>
      </S.SideBarDelivery>
      <S.SideBarPurchase
        title={`Pagamento - Valor a pagar ${ParseToBRL(totalPrice)}`}
        className={openPurchase ? 'isVisible' : ''}
      >
        <>
          <S.Forms onSubmit={form.handleSubmit}>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              id="cardName"
              type="text"
              name="cardName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardName}
              className={checkInputHasError('cardName') ? 'error' : ''}
            />
            <S.Row>
              <div className="width">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardNumber}
                  mask="9999 9999 9999 9999"
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                />
              </div>
              <div>
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  id="cardCode"
                  type="text"
                  name="cardCode"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardCode}
                  mask="999"
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                />
              </div>
            </S.Row>
            <S.Row>
              <div>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <InputMask
                  id="cardMonth"
                  type="text"
                  name="cardMonth"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardMonth}
                  mask="99"
                  className={checkInputHasError('cardMonth') ? 'error' : ''}
                />
              </div>
              <div>
                <label htmlFor="cardYear">Ano de vencimento</label>
                <InputMask
                  id="cardYear"
                  type="text"
                  name="cardYear"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardYear}
                  mask="99"
                  className={checkInputHasError('cardYear') ? 'error' : ''}
                />
              </div>
            </S.Row>
            <Button
              type="submit"
              title="Clique aqui para Finalizar Pagamento a compra"
              onClick={form.handleSubmit}
            >
              {isLoading ? 'Finalizando compra..' : 'Finalizar compra'}
            </Button>
            <Button
              type="button"
              title="Clique aqui para Voltar para a edição de endereço"
              onClick={BackDeliveryForm}
            >
              Voltar para a edição de endereço
            </Button>
          </S.Forms>
        </>
      </S.SideBarPurchase>
      <S.SideBarFinish
        title={`Pedido realizado - ${orderId}`}
        className={openFinalizar ? 'isVisible' : ''}
      >
        <>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button
            type="button"
            title="Clique aqui para concluir a compra"
            onClick={FinishButtonClick}
          >
            Concluir
          </Button>
        </>
      </S.SideBarFinish>
    </>
  )
}

export default Delivery

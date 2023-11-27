import { useState } from 'react'
import Button from '../../Button'
import Card from '../../Card'
import { InputGroup, Row, TagButton } from './styles'

import boleto from '../../../assets/images/barcode 1.png'
import cartao from '../../../assets/images/credit-card 1.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome</label>
              <input id="fullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="emial" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input id="eliveryEmail" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirDeliveryEmail">Confirme o e-mail</label>
              <input id="confirDeliveryEmail" type="email" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TagButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="boleto" />
            Boleto bancário
          </TagButton>

          <TagButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Cartão de credito" />
            Cartão de credito
          </TagButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input id="cardOwner" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão{' '}
                    </label>
                    <input id="cpfCardOwner" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão </label>
                    <input id="cardDisplayName" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="cardNumber">Número do cartão </label>
                    <input id="cardNumber" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês de vencimento </label>
                    <input id="expiresMonth" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento </label>
                    <input id="expiresYear" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cadrCode">CVV</label>
                    <input id="cadrCode" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select>
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 200,00</option>
                      <option>3x de R$ 200,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo ocorrerá somente após a
                aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>

      <Button type="button" title="Clique para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}
export default Checkout

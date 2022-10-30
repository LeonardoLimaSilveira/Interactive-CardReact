import React from 'react'
import styled from 'styled-components'
import foto from '../assets/images/bg-main-desktop.png'
import photoMob from '../assets/images/bg-main-mobile.png'
import cardBack from '../assets/images/bg-card-back.png'
import cardFront from '../assets/images/bg-card-front.png'
import './container.css'
const MainContainer = styled.div``
const InputContent = styled.input`
  background: none;
  border: none;
  outline: none;
  letter-spacing: 5px;
  color: white;
  &::placeholder {
    color: white;
  }
`
const InputFrontCard = styled.input`
  background: none;
  color: white;
  border: none;
  outline: none;
  letter-spacing: 5px;
  width: 100%;
  font-size: 26px;
  &::placeholder {
    color: white;
  }
`
const InputFrontCardName = styled.input`
  background: none;
  color: white;
  border: none;
  outline: none;
  letter-spacing: 3px;
  font-size: 15px;
  &::placeholder {
    color: white;
  }
`
const BgDesk = styled.img`
  height: 100vh;
  margin: 0;
  padding: 0;
  position: fixed;
  @media (max-width: 768px) {
    position: relative;
    height: auto;
    min-width: 100%;
    position: fixed;
  }
`
const MainContent = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-left: 200px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0;
    margin-right: 30px;
  }
`
const ImgLeftContent = styled.img``
const LeftContent = styled.div``
const RightContent = styled.div`
  width: 300px;
  margin-left: 200px;
  @media (max-width: 768px) {
    margin-left: 0;
    position: relative;
    top: -60px;
    right: -40px;
  }
`
const LeftContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
const NameCardDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-content: space-between;
  @media (max-width: 768px) {
    width: 90%;
  }
`
const FormLabel = styled.label`
  color: hsl(278, 68%, 11%);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 14px;
  display: block;
  margin-bottom: 7px;
`
const InputStyle = styled.input`
  border-radius: 10px;
  outline: none;
  border: 1px solid hsl(270, 3%, 87%);
  color: hsl(278, 68%, 11%);
  font-size: 16px;
  margin-bottom: 30px;
  &::placeholder {
    color: hsl(279, 6%, 55%);
    letter-spacing: 1px;
  }
`
const InputDiv = styled.div`
  display: flex;
`
const InputButton = styled.input`
  width: 300px;
  padding: 10px 0px;
  border: none;
  border-radius: 7px;
  background-color: hsl(278, 68%, 11%);
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
`
const Error = styled.p`
  color: hsl(0, 100%, 66%);
  font-size: 13px;
  margin-top: -30px;
  margin-bottom: 30px;
`
const CompleteDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  color: hsl(278, 68%, 11%);
  margin: 20px 0px;
`
const Paragraph = styled.p`
  color: hsl(279, 6%, 55%);
`
const DivFrontCard = styled.div`
  @media (max-width: 768px) {
    position: relative;
    z-index: 100;
    top: -110px;
    left: 50px;
  }
`
const Container = () => {
  const [cardN, setCardN] = React.useState(null)
  const [cardName, setCardName] = React.useState(null)
  const [cardDate, setCardDate] = React.useState('')
  const [cardYear, setCardYear] = React.useState('')
  const [sendCard, setsendCard] = React.useState(false)
  const [cvc, setCvc] = React.useState(null)
  const [errorDate, setErrorDate] = React.useState(null)
  const [errorYear, setErrorYear] = React.useState(null)
  const [errorCvc, setErrorCvc] = React.useState(null)
  const [fullDate, setFullDate] = React.useState('')
  const [errorNumber, setErrorNumber] = React.useState(null)
  const [card, setCard] = React.useState()

  const inputCard = React.useRef()

  const handleChange = () => {
    const cardValue = inputCard.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/)
    inputCard.current.value = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]} ${cardValue[2]}${`${
          cardValue[3] ? ` ${cardValue[3]}` : ''
        }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`
    const numbers = inputCard.current.value.replace(/(\D)/g, '')
    setCard(numbers)
  }

  React.useEffect(() => {
    handleChange()
  }, [card])

  function onBlur({ target }) {
    setCardName(target.value)
  }
  function cardNumberBlur({ target }) {
    if (
      /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g.test(target.value) &&
      target.value.length
    ) {
      setErrorNumber(null)
      setCardN(target.value)
    }
    if (!/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g.test(target.value)) {
      setErrorNumber('Insert a valid credit card number')
    }
  }
  function cardDateBlur({ target }) {
    if (target.value === '') {
      setErrorDate("Can't be blank")
    } else {
      setCardDate(target.value)
      setErrorDate(null)
    }
  }
  function cardYearBlur({ target }) {
    if (target.value === '') {
      setErrorYear(true)
      setErrorDate("Can't be blank")
    } else {
      setCardYear(target.value)
      setErrorYear(null)
      setErrorDate(null)
    }
  }
  function handleSubmit(e) {
    e.preventDefault()
    setFullDate(`${cardDate}/${cardYear}`)
    if (fullDate && cardN && cardName && cardDate && cardYear && cvc)
      setsendCard(true)
  }
  function cvcBlur({ target }) {
    if (target.value === '') {
      setErrorCvc("Can't be blank")
    } else {
      setCvc(target.value)
      setErrorCvc(null)
    }
  }
  const divStyleCard = {
    position: 'relative',
    width: '447px',
    height: '245px',
    marginBottom: '30px'
  }

  return (
    <MainContainer>
      <BgDesk src={window.outerWidth <= 768 ? photoMob : foto}></BgDesk>
      <MainContent>
        <LeftContent>
          <LeftContentDiv>
            <DivFrontCard>
              <div className={'divFrontCard'} style={divStyleCard}>
                <ImgLeftContent
                  className={'imgFront'}
                  src={cardFront}
                  style={{
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
                    borderRadius: '12px'
                  }}
                ></ImgLeftContent>
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    height: '100%'
                  }}
                >
                  <svg
                    width="84"
                    height="47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="23.478"
                      cy="23.5"
                      rx="23.478"
                      ry="23.5"
                      fill="#fff"
                    />
                    <path
                      d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
                      stroke="#fff"
                    />
                  </svg>
                  <div
                    style={{
                      width: '100%',
                      height: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <InputFrontCard
                      type="number"
                      id="number"
                      placeholder={sendCard ? cardN : '0000 0000 0000 0000'}
                      disabled
                      className={'cardnumbers'}
                    ></InputFrontCard>
                    <NameCardDiv>
                      <InputFrontCardName
                        type="name"
                        id="name"
                        placeholder={sendCard ? cardName : 'Leo Lima'}
                        disabled
                      ></InputFrontCardName>
                      <InputFrontCardName
                        type="number"
                        id="number"
                        placeholder={sendCard ? fullDate : '00/00'}
                        disabled
                        style={{ textAlign: 'right', marginLeft: '20px' }}
                        className={'dateFront'}
                      ></InputFrontCardName>
                    </NameCardDiv>
                  </div>
                </div>
              </div>
            </DivFrontCard>
            <div
              className={'divCardBack'}
              style={{ position: 'relative', width: '447px', height: '245px' }}
            >
              <ImgLeftContent
                src={cardBack}
                className={'imgBack'}
                style={{
                  marginLeft: '80px',
                  boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
                  borderRadius: '12px'
                }}
              ></ImgLeftContent>
              <InputContent
                style={{
                  position: 'absolute',
                  bottom: '47%',
                  right: '-20px',
                  width: '40px'
                }}
                type="number"
                id="number"
                placeholder={sendCard ? cvc : '000'}
                disabled
                value=""
                className={'cvc'}
              ></InputContent>
            </div>
          </LeftContentDiv>
        </LeftContent>
        <RightContent>
          {!sendCard && (
            <form action="" onSubmit={handleSubmit}>
              <FormLabel htmlFor="CardName">Cardholder Name</FormLabel>
              <InputStyle
                style={{ width: '300px', padding: '10px' }}
                id="CardName"
                type="name"
                onBlur={onBlur}
                placeholder="ex: Leo Lima"
              ></InputStyle>
              <FormLabel htmlFor="CardNumber">Card Number</FormLabel>
              <InputStyle
                id="CardNumber"
                type="text"
                name="CardNumber"
                maxLength={20}
                ref={inputCard}
                onChange={handleChange}
                onBlur={cardNumberBlur}
                placeholder="ex: 0000 0000 0000 0000"
                style={{
                  width: '300px',
                  padding: '10px',
                  border: errorNumber ? '1px solid red' : ''
                }}
              ></InputStyle>
              {errorNumber && <Error>{errorNumber}</Error>}
              <InputDiv>
                <div>
                  <FormLabel htmlFor="CardDate">Exp. Date (MM/YY)</FormLabel>
                  <InputStyle
                    style={{
                      width: '50px',
                      padding: '10px',
                      marginRight: '10px',
                      textAlign: 'center',
                      border: errorDate ? '1px solid red' : ''
                    }}
                    type="text"
                    maxLength={2}
                    id="CardDate"
                    onBlur={cardDateBlur}
                    placeholder="00"
                  ></InputStyle>

                  <InputStyle
                    type="text"
                    id="CardDateYear"
                    maxLength={2}
                    placeholder="00"
                    onBlur={cardYearBlur}
                    style={{
                      width: '50px',
                      padding: '10px',
                      textAlign: 'center',
                      border: errorYear ? '1px solid red' : ''
                    }}
                  ></InputStyle>
                  {errorDate && <Error>{errorDate}</Error>}
                </div>
                <div style={{ marginLeft: '20px' }}>
                  <FormLabel htmlFor="CVC" style={{ marginLeft: '10px' }}>
                    CVC
                  </FormLabel>
                  <InputStyle
                    style={{
                      width: '120px',
                      padding: '10px'
                    }}
                    type="text"
                    id="CVC"
                    maxLength={3}
                    placeholder="ex: 123"
                    onBlur={cvcBlur}
                  ></InputStyle>
                  {errorCvc && <Error>{errorCvc}</Error>}
                </div>
              </InputDiv>
              <InputButton type="submit" value="Confirm"></InputButton>
            </form>
          )}

          {sendCard && (
            <CompleteDiv>
              <svg
                width="80"
                height="80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="url(#a)" />
                <path
                  d="M28 39.92 36.08 48l16-16"
                  stroke="#fff"
                  stroke-width="3"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1="-23.014"
                    y1="11.507"
                    x2="0"
                    y2="91.507"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6348FE" />
                    <stop offset="1" stop-color="#610595" />
                  </linearGradient>
                </defs>
              </svg>
              <Title>Thank you!</Title>
              <Paragraph>We've added your card details</Paragraph>
              <InputButton
                style={{ marginTop: '20px' }}
                type="submit"
                value="Continue"
                onClick={() => document.location.reload(true)}
              ></InputButton>
            </CompleteDiv>
          )}
        </RightContent>
      </MainContent>
    </MainContainer>
  )
}

export default Container

import {Component} from 'react'

import './index.css'

class TouchTyping extends Component {
  state = {timer: 300, count: 0, value: '', text: '', mainpage: true}

  startTimer = () => {
    const {count} = this.state
    const list = [
      'asdfhjkl',
      'zxcvbnm,',
      'qweryuio',
      'te ta te ta te ta',
      've vt ve vt ve vt',
      `Once upon a time there was an old mother pig who had 
       three little pigs and not enough food to feed them. So
       when they were old enough, she sent them out into the 
       world to seek their fortunes.The first little pig was very
        lazy. He didn't want to work at all and he built his house out of straw. 
        The second little pig worked a little bit harder but he was somewhat 
        lazy too and he built his house out of sticks. Then, they sang and danced 
        and played together the rest of the day.`,
    ]
    this.setState({text: list[count]})
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {timer} = this.state
    if (timer > 0) this.setState(preState => ({timer: preState.timer - 1}))
  }

  startAgain = () => {
    clearInterval(this.timerID)
    this.setState({timer: 300, value: '', text: ''})
    this.setState(preState => ({count: preState.count + 1}))
  }

  moveNextPage = () => {
    this.setState({mainpage: false})
  }

  showResult = () => {
    const {value, text} = this.state
    const valuesList = text.includes(' ') ? value.split(' ') : value.split('')
    const Characters = valuesList.filter(each => text.includes(each))
    console.log(valuesList)
    return (
      <div className="result-card">
        <h1 className="text">Result</h1>
        <p className="text">Total characters :{valuesList.length}</p>
        <p className="text">Correctly entered words :{Characters.length}</p>
        <p className="text">
          Wrongly entered words :{valuesList.length - Characters.length}
        </p>
        <p className="text">GWPM :{valuesList.length / 5}</p>
        <p className="text">NWPM :{Characters.length / 5}</p>
        <p className="text">
          Accuracy:{((Characters.length / 5) * 100) / (valuesList.length / 5)}
        </p>
        <button
          type="button"
          onClick={this.startAgain}
          className="start-button"
        >
          Next
        </button>
      </div>
    )
  }

  updateValue = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {timer, text, value, mainpage} = this.state
    return (
      <>
        {mainpage && (
          <div className="first-section">
            <h1 className="head">Welcome to Touch Typing</h1>
            <h1 className="head2">About Touch Typing</h1>
            <p className="description">
              Welcome to touch typing, this a good platform where you can learn
              and practice typing. Typing touch consists practice sections in
              this practice sections you came to know and get good experience in
              typing after the practice sections there are some exercises where
              you have to type stories,poems and many more.By doing all the
              practice sets and exercises you can find improvement in your
              timing skill
            </p>
            <button
              type="button"
              className="button1"
              onClick={this.moveNextPage}
            >
              Lets Go
            </button>
          </div>
        )}
        {!mainpage && (
          <div className="main-container">
            {timer !== 0 && (
              <>
                <h1 className="main-heading">Welcome to Touch Typing</h1>
                <p className="timer">Timer: {timer} sec</p>
                <div className="container-1">
                  <button
                    type="button"
                    onClick={this.startTimer}
                    className="start-button"
                  >
                    Start
                  </button>
                  <p className="para">{text}</p>
                  <textarea
                    rows="20"
                    cols="40"
                    value={value}
                    onChange={this.updateValue}
                  />
                </div>
              </>
            )}
            {timer === 0 && this.showResult()}
          </div>
        )}
      </>
    )
  }
}

export default TouchTyping

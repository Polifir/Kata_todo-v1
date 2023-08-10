import './Timer.css';
import React, { useState, useEffect  } from 'react';
// export default class Timer extends Component {
//   state={
//     time: this.props.time,
//     active: false,
//   }
  // interval = -1

  // componentDidMount() {
  //   this.turnTimerOn();
  // }

  // turnTimerOn(isInit = true) {
  //   if (!this.props.timer.isStopped && !isInit) return;
  //   if (!isInit) {
  //     this.props.updateTimer(this.props.id, { ...this.props.timer, isStopped: false });
  //   }

  //   clearInterval(this.interval);
  //   this.interval = setInterval(() => {
  //     this.forceUpdate();
  //   }, 1000);
  // }

  // turnTimerOff(isInit = true) {
  //   if (this.props.timer.isStopped && !isInit) return;
  //   if (!isInit) {
  //     this.props.updateTimer(this.props.id, { ...this.props.timer, isStopped: true });
  //   }
  //   clearInterval(this.interval);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  // calculateTimer() {
  //   const { startDiapason, diffInMS, isStopped } = this.props.timer;
  //   const diapason = isStopped ? diffInMS : differenceInMilliseconds(new Date(), startDiapason);
  //   return format(new Date(diapason), 'mm:ss');
  // }
  
  // Write a <Timer /> component which allows a user to start and stop
  // a timer which displays how many seconds have passed
  
 const Timer = () => {
    const [timerId, setTimerId] = useState();
    const [timer, setTimer] = useState(0);
  
    const formateSec = (sec, del) =>{
      switch(del){
        case "h":
          let h = Math.trunc(sec/360);
          return h < 10? `0${h}` : h
        case "m":
          let m = Math.trunc(sec/60);
          return m < 10? `0${m}` : m
        case "s":
          let s = Math.trunc(sec%60);
          return s < 10? `0${s}` : s
        default:
          return
      }
    }

    const onStart = () => {
      setTimerId(
        setInterval(() => {
          setTimer(state => state + 1);
        }, 1000)
      );
    };
  
    const onStop = () => {
      clearInterval(timerId);
    };
  
    useEffect(() => {
      return () => clearInterval(timerId);
    }, [timerId]);

    return (
        <span className="description">
        <button className="icon icon-play" onClick={onStart}></button>
        <button className="icon icon-pause" onClick={onStop}></button>
          {formateSec(timer, "h")}:{formateSec(timer, "m")}:{formateSec(timer, "s")}
      </span>)

  };
  



//   componentDidMount() {
//     if(this.state.active){
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   startTimer(){

//   }

//   tick() {
//     this.setState({
//       time: this.state.time + 1
//     });
//   }

//   render() {
//     return (
      
//     );
//   }
// }

export default Timer
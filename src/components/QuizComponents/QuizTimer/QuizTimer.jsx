

function QuizTimer() {
  useEffect(()=>{
    const id = setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000)
    console.log('Timer', timer)
    return () => {
      clearInterval(id)
    } 
  },[]);

  return (
    <div>QuizTimer</div>
  )
}

export default QuizTimer
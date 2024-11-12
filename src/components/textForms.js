import React , {useState} from 'react'  //useState is a hook


export default function TextForms(props) {
  const upperClicked =()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.sAlert('Converted to UpperCase','success');
  }
  const lowerClicked=()=>{
    let newText=text.toLowerCase();
      setText(newText);
      props.sAlert('Converted to LowerCase','success');
    }

  const changeInText =(event)=>{
    setText(event.target.value); //used to make changes in text area
  }
  const clearText =()=>{ //function to clear the default text
    setText("");
    props.sAlert('Text Cleared','success');
  }

  const [text , setText]=useState("");
  return (
    <>
    <div className="container">
    <div style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
    <div className="mb-3" >
        <textarea style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'black'}} className="form-control" value={text} onChange={changeInText} id="mybox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary me-3' onClick={upperClicked}>Uppercase</button>
    <button className='btn btn-primary me-3' onClick={lowerClicked}>Lowercase</button>
    <button className='btn btn-primary' onClick={clearText}>Clear</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h4 className='mt-3'>Your Text Summary</h4>
      <p><b>{text.split(' ').length}</b> words AND <b>{text.length}</b> Charecters</p>
      <p><b>{0.008 * text.length} mins </b> Expected read time</p>
      <h3>Preview : </h3>
      <p>{text}</p>
    </div>
    </div>
    </>

  )
}


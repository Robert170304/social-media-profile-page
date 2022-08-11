import React from 'react'
import LoginForm from './Login';
import CreateAcc from './CreateAcc';

function NavigateForms() {

  const [formBoolVal, setFormBoolVal] = React.useState(false)

    return (
        <>
        <div className='btn-container flex justify-center sticky top-0 max-w-2xl w-full p-3 flex-row'>
              <button type='button' className={`w-2/4 p-2 ${!formBoolVal ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-900'}`}
                onClick={() => setFormBoolVal(false)}>LOGIN</button>
              <button type='button' className={`w-2/4 p-2 ${formBoolVal ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-900'}`}
                onClick={() => setFormBoolVal(true)}>CREATE ACCOUNT</button>
        </div>
        <div className="form-container flex justify-center items-center w-full">
            {!formBoolVal ? <LoginForm /> : <CreateAcc />}
        </div>
        </>
    )
}

export default NavigateForms
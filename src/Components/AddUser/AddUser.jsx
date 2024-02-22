import React from 'react'

export default function AddUser({ addUser, titleRef, handleButtonClick }) {
    return (
        <div className="addUser">
            <input placeholder="Searth the internet..." type="text" name="text" className="input" ref={titleRef} />
            <button onClick={() => addUser()} class="cssbuttons-io-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                <span>Add</span>
            </button>
            <button onClick={() => handleButtonClick()} class="cssbuttons-io-button">
                <span>Tartiblash</span>
            </button>
        </div>
    )
}

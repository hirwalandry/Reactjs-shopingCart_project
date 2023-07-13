import React, {useState, useEffect} from 'react';

function Exercises(props) {
    const [name, setName] = useState("Mary");
    useEffect(function persistForm() {
        localStorage.setItem('formData',name)
    })
    const [surname, setSurname] = useState('Poppins')
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname
    })
    return (
        <div>
           
            
        </div>
    );
}

export default Exercises; 
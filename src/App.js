import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0);
    const [noteValue, setNoteValue] = React.useState('');
    const [newsletter, toggleNewsletter] = React.useState(false);

    function handleSubmit(e) {
        console.log('Verstuurd');
        e.preventDefault();
        console.log(nameValue);
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label>Naam:</label>
                    <input
                        type="text"
                        name="naam"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    /><br/><br/>
                    <label>Leeftijd:</label>
                    <input
                        type="text"
                        name="Leeftijd"
                        value={ageValue}
                        onChange={(e) => setAgeValue(parseInt(e.target.value))}
                    />
                </fieldset>

                <fieldset>
                    <legend>Jouw review</legend>
                    <br/>
                    Opmerkingen:<br/>
                    <textarea
                        name="message"
                        rows="4" cols="40"
                        placeholder="Wat vond je van het recept?"
                        value={noteValue}
                        onChange={(e) => setNoteValue(e.target.value)}
                    >
                </textarea><br/>
                    <input type="checkbox" id="nieuwsbrief" name="nieuwsbrief"
                           checked={newsletter}
                           onChange={() => toggleNewsletter(!newsletter)}/>
                    <label htmlFor="nieuwsbrief">Schrijf me in voor de nieuwsbrief</label><br/><br/>
                    <input type="submit" value="Versturen"/>
                </fieldset>
            </form>
            </>
            )

            }

            export default App;
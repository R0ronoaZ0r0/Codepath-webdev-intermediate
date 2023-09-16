import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Starbucks ☕️' color='green' />
                        <td></td>
                        <td></td>
                        <Event event='Lunch 🍔' color='pink' />
                        <td></td>
                        <td></td>
                        <Event event='Dinner 🍕' color='blue' />
                        <td></td>
                        </tr>

                        <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color='pink' />
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color='blue' />
                        <td></td>
                        </tr>

                        <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event='Meeting 📅' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Coding 🖥️' color='blue' />
                        <td></td>
                        </tr>

                        <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch 🍔' color='pink' />
                        <td></td>
                        <Event event='Workshop 🛠️' color='green' />
                        <td></td>
                        <Event event='Coding 🖥️' color='blue' />
                        <td></td>
                        </tr>

                        <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch 🍔' color='pink' />
                        <td></td>
                        <Event event='Workshop 🛠️' color='green' />
                        <td></td>
                        <Event event='Coding 🖥️' color='blue' />
                        <td></td>
                        </tr>

                        <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Meeting 📅' color='green' />
                        <td></td>
                        <Event event='Coding 🖥️' color='blue' />
                        <td></td>
                        </tr>

                        <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Meeting 📅' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Meeting 📅' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    
                </tbody>
            </table>
        </div>
        
    )
}

export default Calendar;
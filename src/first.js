

 export default function First() {
  return (
    <div className="First">
      <h1 className='ee'>Welcome to the world of React Js</h1>
      <p1>Hello Vikash </p1>
      <h2>My Favorite React JS</h2>
      <a href='https://www.flipkart.com/'target="_blank" title='Flipkart'> Click hare for flipkart Shopping</a>

        


      <table border={6} align='center'>
      <tr>
          
          <th colSpan={6} >   User Details     </th>
          </tr>
        <tr>
          <th className='tt'>Name</th>
          <th className='tt'>profile</th>
          <th className='tt'>email</th>
          <th className='tt'>contect</th>
          <th className='tt'>Addrass</th>
          <th className='tt'>salary</th>
          </tr>
          <tr>
          <td>Vikash</td>
          <td>Engineer</td>
          <td>xyz@gmail.com</td>
          <td>00800</td>
          <td>Noida</td>
          <td>500000</td>
        
        </tr>
        <tr>
          <td>Aman</td>
          <td>Engineer</td>
          <td>xyz@gmail.com</td>
          <td>00800</td>
          <td>Lucknow</td>
          <td>80000</td>
        
        </tr>
        
      </table>

      <ol type='a'>  
          <li className='aa'>laptop </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ol>  

        <ol start='101'>  
          <li className='aa'> laptop </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ol> 

        <ol type='I'>  
          <li>vikash </li>  
          <li>amit </li>  
          <li>books</li>  
          <li>pen</li>  
        </ol>

        <ul>  
          <li className='aa'>aman </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ul>

        <ul type='circle'>  
          <li>sonu </li>  
          <li>ankit</li>  
          <li>amit</li>  
          <li>pen</li>  
        </ul>

        <ul type='square'>  
          <li className='ee'>laptop </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ul>


    </div>
  );
}

export default App;

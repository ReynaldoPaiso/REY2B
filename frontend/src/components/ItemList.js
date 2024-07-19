import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    },[]);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/')
            setItems(response.data);
        } catch (error) {
            console.error('Error catching the items!', error)
        }
    };


    return (
            <div>
                <br></br>
                <h1>Items</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.id} id='item-content'>
                            {item.first_name} {item.middle_name} {item.last_name} : {item.address} : {item.email} : {item.phone} : {item.date_of_birth} 
                            <br></br>
                            <br></br>
                            : {item.place_of_birth} : {item.sex} : {item.age} : {item.civil_status} : {item.height_m} : {item.weight_kg} : {item.blood_type} : {item.citizenship} : {item.province} : {item.zip_code} : {item.religion} : {item.pagibig_id_no} : {item.philhealth_no} : {item.sss_no} 
                            <br></br>
                            <br></br>
                            : {item.tin_no} : {item.gsis_id_no} : {item.agency_employee} : {item.residential_address} : {item.telephone_no} : {item.fathers_name} : {item.mothers_name}
                            <div className='buttons'>
                            <button onClick={() => onEdit(item)} className='edit-button'>Edit</button>
                            <button onClick={() => onDelete(item.id)} className='delete-button'>Delete</button>
                            </div>
                        </li>
                        
                    ))}
                </ul>
            </div>
    );

}

export default ItemList;

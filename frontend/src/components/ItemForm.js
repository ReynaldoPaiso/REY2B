import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date_of_birth, setDateofBirth] = useState('');
    const [place_of_birth, setPlaceofBirth] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [height_m, setHeight] = useState('');
    const [weight_kg, setWeight] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [province, setProvince] = useState('');
    const [zip_code, setZipCode] = useState('');
    const [religion, setReligion] = useState('');
    const [pagibig_id_no, setPagIbigID] = useState('');
    const [philhealth_no, setPhilhealth] = useState('');
    const [sss_no, setSSS] = useState('');
    const [tin_no, setTIN] = useState('');
    const [gsis_id_no, setGSIS] = useState('');
    const [agency_employee, setAgencyEmployee] = useState('');
    const [residential_address, setResidentialAddress] = useState('');
    const [telephone_no, setTelephone] = useState('');
    const [fathers_name, setFathersName] = useState('');
    const [mothers_name, setMothersName] = useState('');
    
    

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            setDateofBirth(item.date_of_birth);
            setPlaceofBirth(item.place_of_birth);
            setSex(item.sex);
            setAge(item.age);
            setCivilStatus(item.civil_status);
            setHeight(item.height_m);
            setWeight(item.weight_kg)
            setBloodType(item.blood_type);
            setCitizenship(item.citizenship);
            setProvince(item.province);
            setZipCode (item.zip_code);
            setReligion (item.religion);
            setPagIbigID (item.pagibig_id_no);
            setPhilhealth (item.philhealth_no);
            setSSS (item.sss_no);
            setTIN (item.tin_no);
            setGSIS (item.gsis_id_no);
            setAgencyEmployee (item.agency_employee);
            setResidentialAddress (item.residential_address);
            setTelephone (item.telephone_no);
            setFathersName (item.fathers_name);
            setMothersName (item.mothers_name);
        }   
    }, [item]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {first_name, middle_name, last_name, address, email, phone, date_of_birth, place_of_birth, sex, age, civil_status, height_m, weight_kg, blood_type, citizenship, province, zip_code, religion, pagibig_id_no, philhealth_no, sss_no, tin_no, gsis_id_no, agency_employee, residential_address, telephone_no, fathers_name, mothers_name};
        try {
            if(item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('Error submitting the form!', error);
        }
    };

    return(
        <div id='form'>
            <label><h1 id='form-title'>Create Item</h1></label>
            <hr></hr>
        <form onSubmit={handleSubmit}>
            <div id='form-content'>
                <label>First Name: </label><br></br>
                <input type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
                <label id='form-label'>Middle Name: </label>
                <input type='text' value={middle_name} onChange={(e) => setMiddleName(e.target.value)}/>
                <label id='form-label'>Last Name: </label>
                <input type='text' value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            </div><br></br>
            <div id='form-content'>
                <label>Address: </label><br></br>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
                <label id='form-label'>Email: </label><br></br>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label id='form-label'>Phone: </label><br></br>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label id='form-label'>Date of Birth: </label><br></br>
                <input type='text' value={date_of_birth} onChange={(e) => setDateofBirth(e.target.value)}/>
                <label id='form-label'>Place of Birth: </label><br></br>
                <input type='text' value={place_of_birth} onChange={(e) => setPlaceofBirth(e.target.value)}/>
                </div>
                <br></br>
                <div id='form-content'>
                <label id='form-label'>Sex: </label><br></br>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)}/>
                <label id='form-label'>Age: </label><br></br>
                <input type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
                <label id='form-label'>Civil Status: </label><br></br>
                <input type='text' value={civil_status} onChange={(e) => setCivilStatus(e.target.value)}/>
                <label id='form-label'>Height: </label><br></br>
                <input type='text' value={height_m} onChange={(e) => setHeight(e.target.value)}/>
                <label id='form-label'>Weight: </label><br></br>
                <input type='text' value={weight_kg} onChange={(e) => setWeight(e.target.value)}/>
                </div>
                <br></br>
                <div id='form-content'>
                <label id='form-label'>Blood Type: </label><br></br>
                <input type='text' value={blood_type} onChange={(e) => setBloodType(e.target.value)}/>
                <label id='form-label'>Citizenship: </label><br></br>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
                <label id='form-label'>Province: </label><br></br>
                <input type='text' value={province} onChange={(e) => setProvince(e.target.value)}/>
                <label id='form-label'>Zip Code: </label><br></br>
                <input type='text' value={zip_code} onChange={(e) => setZipCode(e.target.value)}/>
                <label id='form-label'>Religion: </label><br></br>
                <input type='text' value={religion} onChange={(e) => setReligion(e.target.value)}/>
                </div>
                <br></br>
                <div id='form-content'>
                <label id='form-label'>PagIbig ID: </label><br></br>
                <input type='text' value={pagibig_id_no} onChange={(e) => setPagIbigID(e.target.value)}/>
                <label id='form-label'>Philhealt ID: </label><br></br>
                <input type='text' value={philhealth_no} onChange={(e) => setPhilhealth(e.target.value)}/>
                <label id='form-label'>SSS ID: </label><br></br>
                <input type='text' value={sss_no} onChange={(e) => setSSS(e.target.value)}/>
                <label id='form-label'>TIN ID: </label><br></br>
                <input type='text' value={tin_no} onChange={(e) => setTIN(e.target.value)}/>
                <label id='form-label'>GSIS ID: </label><br></br>
                <input type='text' value={gsis_id_no} onChange={(e) => setGSIS(e.target.value)}/>
                </div>
                <br></br>
                <div id='form-content'>
                <label id='form-label'>Agency Employee: </label><br></br>
                <input type='text' value={agency_employee} onChange={(e) => setAgencyEmployee(e.target.value)}/>
                <label id='form-label'>Residential Address: </label><br></br>
                <input type='text' value={residential_address} onChange={(e) => setResidentialAddress(e.target.value)}/>
                <label id='form-label'>Telephone: </label><br></br>
                <input type='text' value={telephone_no} onChange={(e) => setTelephone(e.target.value)}/>
                <label id='form-label'>Fathers Name: </label><br></br>
                <input type='text' value={fathers_name} onChange={(e) => setFathersName(e.target.value)}/>
                <label id='form-label'>Mothers Name: </label><br></br>
                <input type='text' value={mothers_name} onChange={(e) => setMothersName(e.target.value)}/>
                </div>
                <br></br>
            <button type='submit' className='submit-button'>Submit</button>
        </form>
        </div>
    );
}

export default ItemForm;
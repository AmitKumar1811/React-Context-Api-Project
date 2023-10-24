import React, {useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CompanyReg = () => {

  const [companyId, setcompanyId] = useState('');
  const [name, setname] = useState('');
  const [location, setlocation] = useState('');
  const [representative, setrepresentative] = useState('');
  const [numberOfEmployees, setnumberOfEmployees] = useState('');
  

const handleSubmit=async(e)=>
{  
   e.preventDefault()
    const data = {
      companyId: companyId,
      name: name,
      location: location,
      representative: representative,
      numberOfEmployees: numberOfEmployees
    };
    try {
      const response = await fetch("http://7bdd-203-190-154-162.ngrok.io/admin/registerCompany", {
        method: "POST", 
        body: JSON.stringify(data),
        credentials: "include", 
        mode: 'no-cors',
        headers: {
        'Content-Type': 'application/json',
            
        }
      });
      
      const responseData = await response.json();
      console.log("res data is here ",responseData);
    } 
    catch (error) 
    {
      console.log(error);
    }   
  }
  return (
    <>
      <div className="container" style={{ backgroundColor: "grey", color: "white", width: "500px" }}>

        <Form >
          <Form.Group className="mb-3" controlId="">
            <Form.Label>CompanyId</Form.Label>
            <Form.Control type="text" placeholder="Enter ComapnyId" autoComplete='off' value={companyId} onChange={(e) => { setcompanyId(e.target.value) }} />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="CompanyName" autoComplete='off' value={name} onChange={(e) => { setname(e.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter Correct" autoComplete='off' value={location} onChange={(e) => { setlocation(e.target.value) }} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="">
            <Form.Label>Representative</Form.Label>
            <Form.Control type="text" placeholder=" Representative" autoComplete='off' value={representative} onChange={(e) => { setrepresentative(e.target.value) }} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="">
            <Form.Label> No of Employee's</Form.Label>
            <Form.Control type='number' placeholder="No of Employee's" autoComplete='off' value={numberOfEmployees} onChange={(e) => { setnumberOfEmployees(e.target.value) }} />
          </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default CompanyReg;
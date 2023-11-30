import React, { useState } from 'react'
import { createDepartment } from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';
const DepartmentComponent = () => {

    const [departmentName, setDepartmentName]=useState('');
    const [departmentDescription, setDepartmentDescription]= useState('');

    const navigator= useNavigate();
    const {id} = useParams();

    function saveDepartment(e){
        e.preventDefault();
        const department={departmentName,departmentDescription};
        createDepartment(department).then((response)=>{
            console.log(response.data);
            navigator('/departments');
        }).catch((err)=>console.error(err));
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Department</h2>
        } else {
            return <h2 className='text-center'>Add Department</h2>
        }
    }
    return (
    <div className='container'> <br/><br/>
    <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
                pageTitle()
            }
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Department Name:</label>
                        <input 
                        type='text'
                        name='departmentName'
                        placeholder='Enter department'
                        value={departmentName}
                        onChange={(e)=> setDepartmentName(e.target.value)}
                        className='form-control'
                        >
                        </input>
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'>Department Description</label>
                        <input 
                        type='text'
                        name='departmentDescription'
                        placeholder='Department Description'
                        value={departmentDescription}
                        onChange={(e)=> setDepartmentDescription(e.target.value)}
                        className='form-control'
                        >
                        </input>
                    </div>
                    <button className='btn btn-success mb-2' onClick={(e)=>saveDepartment(e)}>Submit</button>
                </form>

            </div>
        </div>
    </div>
    </div>
    )
}

export default DepartmentComponent

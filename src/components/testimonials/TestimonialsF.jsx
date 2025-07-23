import React from 'react'
import styles from './TestimonialsF.module.css';
const TestimonialsF = () => {
    return (
        <>
            <div className='container'>
                <h1 className={styles.wrapper}>Testimonials Form</h1>
                <form>

                    <input type="text" placeholder="Name" className="w-100 bg-black border p-2 text-white my-3" />
                    <div className="form-floating">
                        <textarea className='text-white bg-black w-100 p-2'
                            style={{ height: 100 }}
                            defaultValue={""}
                            placeholder='Description '></textarea>
                    </div>
                    <div className="border rounded p-4 my-3 text-center bg-black text-white">
                        <label htmlFor="formFile" className="form-label fw-semibold"  >
                            Click to upload
                        </label>
                        <input className="form-control my-3  text-black border-0 w-50 mx-auto"
                            type="file"
                            id="formFile" />
                    </div>
                    <div className=" my-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Status
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>

            </div>
        </>
    )
}

export default TestimonialsF

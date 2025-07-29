import React, { useState } from 'react'
import styles from './TestimonialsF.module.css';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// schema
const schema = z.object({
    name: z.string().min(1, { error: 'Enter your name' }),
    description: z.string().min(1, { error: 'enter description' }),
    status: z.boolean().transform((val) => (val ? "A" : "I")),
    image: z.instanceof(File).refine((file) => file.type.startsWith("image/"), {
        message: "only image files are allowed",
    })
})

const TestimonialsF = () => {

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({ resolver: zodResolver(schema) })
    const [eValue, setEValue] = useState();
    const onSubmit = (data) => {
        console.log(data);


    }

    const handleImage = (data) => {
        console.log(data.target.files[0]);
        const file = data.target.files[0];
        const fileType = ['image/png', 'image/jpeg', 'image/gif']
        
        if (file && fileType.includes(file.type)) {
            setEValue(URL.createObjectURL(file))
            setValue("image", file)
        }else{
            window.alert('enter valid img')
        }

    }

    return (
        <>
            <div className='container'>
                {/* heading  */}
                <h1 className={styles.wrapper}>Testimonials Form</h1>
                {/* /heading  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <input type="text"
                        placeholder="Name"
                        className="w-100 bg-black border p-2 text-white my-3"
                        {...register('name')} />
                    {errors.name ? <p className='text-danger'>{errors.name.message}</p> : " "}

                    {/* name */}
                    {/* description */}
                    <div className="form-floating">
                        <textarea className='text-white bg-black w-100 p-2'
                            style={{ height: 100 }}
                            defaultValue={""}
                            placeholder='Description '
                            {...register('description')} ></textarea>
                        {errors.description ? <p className='text-danger'>{errors.description.message}</p> : ' '}

                    </div>
                    {/* /description */}
                    {/* image  */}
                    <div className="border rounded p-4 my-3 text-left bg-black text-white d-flex align-items-center gap-3">
                        <label htmlFor="formFile"
                            className="form-label fw-bold pt-2"  >
                            Click to upload
                        </label>
                        <input className="form-control my-3  text-black border-0 w-50 "
                            type="file"
                            id="formFile"
                            onChange={handleImage}
                        />
                    {eValue && <img width={100} height={100} src={eValue}></img>}
                    </div>

                    {/* /image  */}
                    {/* status  */}
                    <div className=" my-3 form-check">
                        <input type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            {...register('status')}
                        />
                        <label className="form-check-label"
                            htmlFor="exampleCheck1">
                            Status {watch("status") ? 'Active' : 'In-Active'}
                        </label>
                    </div>
                    {/* /status  */}
                    {/* send btn  */}
                    <div>
                        <button type="submit"
                            className="btn btn-primary w-100">
                            Send
                        </button>
                    </div>
                    {/* /send btn  */}
                </form>
            </div>
        </>
    )
}

export default TestimonialsF

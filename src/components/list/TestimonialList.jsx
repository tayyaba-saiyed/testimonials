import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import styles from './TestimonialList.module.css'; 
import ReactPaginate from "react-paginate";
// const testimonials = [
//     {
//         id: 1,
//         name: "dsfdsf sdfds Test seo title",
//         description: "fdsfdsf Test Desc cate seo...",
//         image_full_url:
//             "https://car-parking.emaadinfotech.in/public/dynamic/testimonial/45da318c2ef96b4846e4e03d25535ef4.jpg",
//         created_at: "August 14, 2023 09:37 AM",
//     },
//     {
//         id: 2,
//         name: "Test seo title",
//         description: "fdsfdsf Test Desc cate seo",
//         image_full_url:
//             "https://car-parking.emaadinfotech.in/public/dynamic/testimonial/45da318c2ef96b4846e4e03d25535ef4.jpg",
//         created_at: "August 14, 2023 09:37 AM",
//     },
//     {
//         id: 3,
//         name: "Another Testimonial",
//         description: "Sample description for demo use.",
//         image_full_url:
//             "https://car-parking.emaadinfotech.in/public/dynamic/testimonial/45da318c2ef96b4846e4e03d25535ef4.jpg",
//         created_at: "August 14, 2023 09:37 AM",
//     },
// ];
const TestimonialList = () => {
    const [open, setOpen] = useState(false);

    const [testimonial, setTestimonial] = useState([]); //get data
    const [search, setSearch] = useState("");
    const [loader, setLoader] = useState(false);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    useEffect(() => {

        setLoader(true);


        axios.post("https://car-parking.emaadinfotech.in/api/testimonial-data?page=" + page,
            {
                sort_order: "DESC",
                search_filed: search,
                limit_per_page: limit,
            }


        ).then((res) => {
            console.log(res);
            setLoader(false)
            if (res.data.status == "success") {
                setTestimonial(res.data.data.data || []);
                setTotal(res.data.data.total);

            }
        }).catch((err) => {
            console.log(err);
            setLoader(false)

        })

    }, [search, page])


    // useEffect(() => {
    // })

    // , [search])
    console.log(search);




    return (
        <div className="container my-4">
            <div className="text-center">
            <h1 className="mb-4">Testimonials</h1>
                <input type="text"
                    placeholder="search"
                    onChange={(eve) => setSearch(eve.target.value)} 
                    className="mb-3 w-50 px-3 py-1"
                    />
            </div>
            {loader && <CircularProgress />}

            {testimonial?.length == 0 && <h4 className="py-3">No data found!</h4>}
            <div className="row g-4">
                {testimonial.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={item.image_full_url}
                                className="card-img-top"
                                alt={item.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p
                                    className="card-text"
                                    style={{ maxHeight: "100px", overflow: "hidden" }}
                                >
                                    {item.description}
                                </p>
                            </div>
                            <div className="card-footer text-muted">
                                Created on: {item.created_at}
                                <br />
                                <button
                                    className="btn btn-primary w-100"
                                    onClick={() => setOpen(true)}
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
               
               <div className="pagination">

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={(e) => {
                            console.log(e);
                            setPage(e.selected + 1);
                        }}
                        pageRangeDisplayed={5}
                        pageCount={total / limit}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        />
                        </div>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div style={{ width: "70%", margin: "auto" }}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src="https://car-parking.emaadinfotech.in/public/dynamic/testimonial/45da318c2ef96b4846e4e03d25535ef4.jpg"
                                className="card-img-top"
                                alt="sljbd"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Test</h5>
                                <p
                                    className="card-text"
                                    style={{ maxHeight: "100px", overflow: "hidden" }}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                                    nobis quibusdam officia veniam odio in perferendis sed nisi
                                    doloremque, mollitia molestiae consequatur sint consequuntur,
                                    modi consectetur voluptatem quo magnam voluptatibus?
                                </p>
                            </div>
                            <div className="card-footer text-muted">
                                Created on: August 14, 2023 09:37 AM
                                <br />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};
export default TestimonialList;





















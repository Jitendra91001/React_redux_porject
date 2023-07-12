import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteSync, UpdateSync, fetchAsync } from './CartSlice';
import { Link } from 'react-router-dom';


export function CartList() {
  const item = useSelector((state) => state.carts.item)
  useSelector(console.log)
  const dispatch = useDispatch();
  let quantity = [1, 2, 3, 4]
  useEffect(() => {
    dispatch(fetchAsync())
  }, [])

  const handleData = (e, id) => {
    dispatch(UpdateSync({ id, item: { quantity: parseInt(e.target.value) } }))
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Link to='/'><button className='btn btn-success m-2'>Back [{item.length}] </button></Link>
          <div className='col-sm-10 mx-auto '>
            <table className='table-bordered table table-striped'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>description</th>
                  <th>Price</th>
                  <th>quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  item && item.map((ele, ind) => (
                    <tr>
                      <td><img src={ele.thumbnail} style={{ height: "100px", width: "100px" }} /></td>
                      <td>{ele.title}</td>
                      <td>{ele.description}</td>
                      <td>{ele.price*ele.quantity}</td>
                      <td>
                        <select value={ele.quantity} onChange={(e) => handleData(e, ele.id)}>
                          {
                            quantity.map((item) => {
                              return <option value={item}>{item}</option>
                            })
                          }
                        </select>
                      </td>
                      <td style={{ width: "9rem" }}><button className='btn btn-warning btn-sm' onClick={() => dispatch(DeleteSync(ele.id))}>Remove</button><button className='btn btn-info btn-sm float-end'>Order</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </>
  );
}

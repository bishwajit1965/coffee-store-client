import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, details, category, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      details,
      category,
      photo,
    };

    MySwal.fire({
      title: "Are you sure?",
      text: "If you are sure, proceed !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updatedCoffee),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              MySwal.fire("Updated!", "Coffee has been updated.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="md:px-36 md:my-14 mx-auto">
      <h2 className="text-3xl font-extrabold text-center">Update coffee</h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex justify-center gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee name"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full rounded-lt-md"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Chef name"
                name="chef"
                defaultValue={chef}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex justify-center gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier name"
                name="supplier"
                defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                defaultValue={taste}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex justify-center gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Details"
                name="details"
                defaultValue={details}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo-url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo-url"
                name="photo"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="w-full mt-10">
          <button className="btn btn-block border border-[#331A15] py-3 bg-[#D2B48C]">
            Update Coffee Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;

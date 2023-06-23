import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    // console.log(name, chef, supplier, taste, details, category, photo);
    const newCoffee = { name, chef, supplier, taste, details, category, photo };
    console.log(newCoffee);

    // Data to be sent to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          MySwal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee insertion is successful!!!",
            showConfirmButton: true,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="md:px-36 md:my-14 mx-auto bg-[#F4F3F0] py-[2.5rem] p-2">
      <h2 className="text-center text-3xl font-extrabold">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
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
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="w-full mt-10">
          <button className="btn btn-block border border-[#331A15] py-3 bg-[#D2B48C]">
            Add Coffee Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;

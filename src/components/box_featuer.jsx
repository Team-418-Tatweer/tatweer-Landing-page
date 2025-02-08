const FeatureBox = ({ title, description, Icon }) => {
    return (
      <div className="bg-[#172755] text-white rounded-2xl p-4 h-72 w-64 text-center flex flex-col items-center">
        <div className="bg-blue-600 p-4 rounded-3xl flex justify-center items-center my-6">
          <Icon className="text-white text-4xl" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    );
  };
  
  export default FeatureBox;
  
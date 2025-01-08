const equipmentListApi = async () => {
  const res = await fetch(
    "https://d3660g9kardf5b.cloudfront.net/api/equipment"
  );
  const data = await res.json();

  return data;
};

export default equipmentListApi;

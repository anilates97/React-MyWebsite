const handler = async (req, res) => {
  return {
    statusCode: 200,
    body: "server is running",
  };
};

module.exports = { handler };

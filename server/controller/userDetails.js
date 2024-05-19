import getUserDetailsFromToken from '../helpers/getUserDetailsFromToken.js'; // get user details from token

async function userDetails(request, response) {
  try {
    const token = request.cookies.token || '';

    const user = await getUserDetailsFromToken(token);

    return response.status(200).json({
      message: 'user details',
      data: user,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

export default userDetails;

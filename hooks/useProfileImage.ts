const UseProfileImage = () => {
    //TODO: get profile image url from db if available

    const defaultImg = `${process.env.NEXT_PUBLIC_SITE_URL}/profile_img.svg`
    return defaultImg
}

export default UseProfileImage

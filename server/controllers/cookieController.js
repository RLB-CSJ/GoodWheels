const cookieController = {}

cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.user._id.toString(), {httpOnly: true}) //!locals.user._id dependent on database value
  next()
}

export default cookieController
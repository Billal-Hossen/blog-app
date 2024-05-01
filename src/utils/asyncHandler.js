const asyncHandler = (requestHndler) => {
  return (req, res, next) => {
    Promise.resolve(requestHndler(req, res, next))
      .catch(err => next(err))
  }
}

export { asyncHandler }
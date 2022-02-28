export default {
  '/getUsers': (req: any, res: any) => {
    setTimeout(() => {
      res.json({
        name: 'may'
      })
    }, 3000)
  },
  '/getUser': {
    name: 'Mark'
  }
}

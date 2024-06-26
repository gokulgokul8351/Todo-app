import todo from '../model/todo.model.js'

// Create
export const todoCreate = async (req, res) => {
  const newTodo = new todo({
    title: req.body.title,
    desc: req.body.desc,
  })

  try {
    const create = await newTodo.save()
    return res.status(201).json(create)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Get find data
export const todoFind = async (req, res) => {
  try {
    const find = await todo.find()
    res.status(201).json(find)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// Update
export const todoUpdate = async (req, res) => {
  try {
    const { title, desc } = req.body
    const id = req.params.id
    const updateTodo = await todo.findByIdAndUpdate(
      id,
      {
        title,
        desc,
      },
      {
        new: true,
      }
    )

    if (!updateTodo) {
      return res.status(404).json({ message: 'Todo not find!' })
    } else {
      res.json(updateTodo)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

// Delete
export const todoDelete = async (req, res) => {
  try {
    const id = req.params.id
    await todo.findByIdAndDelete(id)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const Note = ({ note,handleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'
  return (
    <li>{note.content}
      <button onClick={handleImportance}>{label}</button>
    </li>

  )
}

export default Note
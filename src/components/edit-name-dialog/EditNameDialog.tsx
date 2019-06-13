import * as React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

interface Props {
  open: boolean
  onClose: () => void
  shipmentName: string
  onNameEdit: (name: string) => void
}
export const EditNameDialog: React.FC<Props> = ({
  open,
  onClose,
  shipmentName,
  onNameEdit,
}) => {
  const [name, setName] = React.useState(shipmentName)

  function handleSubmit() {
    if (shipmentName === name) {
      onClose()
      return
    }
    onNameEdit(name)
    onClose()
  }
  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {"If you wish you can modify the shipment's name"}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

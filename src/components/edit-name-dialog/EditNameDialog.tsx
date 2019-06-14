import * as React from 'react'

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

export interface Props {
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
  )
}

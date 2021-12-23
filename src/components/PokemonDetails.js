import React from "react";
function PokemonDetails() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
    </Modal>
  );
}

export default PokemonDetails;

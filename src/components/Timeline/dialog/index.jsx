import React from "react";
import { Dialog } from "@headlessui/react";

export default function MyDialog({ isOpen, setIsOpen }) {
  const style = {
    backgroundColor: "red",
  };
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} style={style}>
      <Dialog.Panel>
        <Dialog.Title>Delete post</Dialog.Title>
        <Dialog.Description>
          This will permanently delete your post
        </Dialog.Description>

        <p>
          Are you sure you want to delete your post? All of his data will be
          permanently removed. This action cannot be undone.
        </p>

        <button type="submit" onClick={() => setIsOpen(false)}>
          Delete
        </button>
        <button type="submit" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

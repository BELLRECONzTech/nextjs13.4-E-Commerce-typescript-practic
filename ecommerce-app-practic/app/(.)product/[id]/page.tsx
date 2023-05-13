'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'


function Modal() {
    let [isOpen, setIsOpen] = useState(true)
  return (
    <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
        <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <Dialog.Title>Complete your order</Dialog.Title>

            {/* ... */}
            </Dialog.Panel>
        </div>
    </div>
    </Dialog>
  )
}

export default Modal
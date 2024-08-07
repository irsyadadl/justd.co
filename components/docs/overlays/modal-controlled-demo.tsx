'use client'

import { useState } from 'react'

import { Button, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from 'ui'

export default function ModalControlledDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onPress={() => setOpen(true)} intent="primary">
        Subscribe
      </Button>
      <ModalContent isOpen={open} onOpenChange={setOpen}>
        <ModalHeader>
          <ModalTitle>Subscribe to Our Newsletter</ModalTitle>
          <ModalDescription>Get the latest news and updates right to your inbox.</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button onPress={() => setOpen(false)}>Sign Up</Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}

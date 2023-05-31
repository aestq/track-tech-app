import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'
import cls from './Select.module.scss'

interface SelectProps {
  className?: string
}

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false }
]

export const Select = (props: SelectProps) => {
  const { className } = props
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox
      value={selectedPerson}
      onChange={setSelectedPerson}
    >
      <Listbox.Button className={cls.trigger}>
        <Button theme='secondary'>{selectedPerson.name}</Button>
      </Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            <Card theme='secondary'>
              {person.name}
            </Card>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
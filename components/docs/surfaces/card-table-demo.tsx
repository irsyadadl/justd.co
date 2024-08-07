'use client'

import { IconDotsVertical, IconEye, IconHighlight, IconTrash } from 'justd-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationSection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from 'ui'

export default function CardTableDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Manage users, groups, and roles.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table aria-label="Users">
          <TableHeader>
            <TableColumn>#</TableColumn>
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Genre</TableColumn>
            <TableColumn>Age</TableColumn>
            <TableColumn>Occupation</TableColumn>
            <TableColumn />
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow id={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.occupation}</TableCell>
                <TableCell className="flex justify-end">
                  <Menu>
                    <MenuTrigger>
                      <IconDotsVertical />
                    </MenuTrigger>
                    <MenuContent showArrow placement="left">
                      <MenuItem>
                        <IconEye /> View
                      </MenuItem>
                      <MenuItem>
                        <IconHighlight /> Edit
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem isDanger>
                        <IconTrash /> Delete
                      </MenuItem>
                    </MenuContent>
                  </Menu>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationList>
            <PaginationItem role="first" />
            <PaginationItem role="previous" />
            <PaginationSection className="lg:hidden rounded-lg border">
              <PaginationItem role="label">1</PaginationItem>
              <PaginationItem role="separator" />
              <PaginationItem className="text-muted-fg" role="label">
                {users.length}
              </PaginationItem>
            </PaginationSection>
            <PaginationSection className="lg:flex hidden" items={pages}>
              {(item) => (
                <PaginationItem id={item.value.toString()} isCurrent={item.value === 4} href="#">
                  {item.value}
                </PaginationItem>
              )}
            </PaginationSection>
            <PaginationItem role="next" />
            <PaginationItem role="last" />
          </PaginationList>
        </Pagination>
      </CardFooter>
    </Card>
  )
}

const users = [
  {
    id: 1,
    name: 'John Doe',
    gender: 'Male',
    age: 30,
    occupation: 'Software Engineer'
  },
  {
    id: 2,
    name: 'Jane Smith',
    gender: 'Female',
    age: 25,
    occupation: 'Marketing Manager'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    gender: 'Male',
    age: 40,
    occupation: 'Doctor'
  },
  {
    id: 4,
    name: 'Emily Chen',
    gender: 'Female',
    age: 28,
    occupation: 'Teacher'
  },
  {
    id: 5,
    name: 'Michael Brown',
    gender: 'Male',
    age: 35,
    occupation: 'Lawyer'
  },
  {
    id: 6,
    name: 'Sarah Lee',
    gender: 'Female',
    age: 32,
    occupation: 'Designer'
  },
  {
    id: 7,
    name: 'Kevin White',
    gender: 'Male',
    age: 45,
    occupation: 'CEO'
  },
  {
    id: 8,
    name: 'Lisa Nguyen',
    gender: 'Female',
    age: 29,
    occupation: 'Engineer'
  },
  {
    id: 9,
    name: 'David Kim',
    gender: 'Male',
    age: 38,
    occupation: 'Consultant'
  },
  {
    id: 10,
    name: 'Hannah Patel',
    gender: 'Female',
    age: 26,
    occupation: 'Writer'
  }
]
const pages = Array.from({ length: users.length / 2 }, (_, i) => ({ value: i + 1 }))

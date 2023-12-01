import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { format } from 'date-fns'

import { CalendarIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { Product } from '@/types/Product'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

async function postProducts(): Promise<Product> {
  try {
    const response = await axios.post('/api/projects/products', {
      headers: { 'Cache-Control': 'no-store' },
    })

    return response.data?.data as Product
  } catch (error) {
    throw error
  }
}

const formSchema = z.object({
  productName: z.string(),
  productDescription: z.string().max(150),
  quantity: z.number(),
  unit: z.number(),
  input: z.number(),
  output: z.number(),
  balance: z.number(),
  date: z.date(),
  projectName: z.string(),
  projectNo: z.number(),
})

function ProductForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: 'product test 0001',
      productDescription: 'description',
      quantity: 10,
      unit: 2,
      input: 3,
      output: 4,
      balance: 20,
      date: new Date(),
      projectName: 'project1',
      projectNo: 1,
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(
    values: z.infer<typeof formSchema>,
  ): Promise<Product> {
    try {
      const response = await axios.post('/api/projects/products', values, {
        headers: { 'Cache-Control': 'no-store' },
      })

      if (response) {
        console.log(response)
        // reloadCallback()
      }

      return response.data?.data as Product
    } catch (error) {
      console.error('Error create products:', error)
      throw error
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product</FormLabel>
              <FormControl>
                <Input placeholder="Product name" {...field} />
              </FormControl>
              <FormDescription>Input product name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="You're product descrion..." {...field} />
              </FormControl>
              <FormDescription>Input product description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full gap-2">
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Input</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="output"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Output</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="balance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Balance</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="project1">Project 1</SelectItem>
                    <SelectItem value="project2">Project 2</SelectItem>
                    <SelectItem value="project3">Project 3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project NO.</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export function DataTableAddOptions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="flex h-8">
          Add
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        {/* begin::Dialog Header */}
        <DialogHeader>
          <DialogTitle>Add products</DialogTitle>
          <DialogDescription>
            {`Add products to you're list.`}
          </DialogDescription>
        </DialogHeader>
        {/* end::Dialog Header */}

        {/* begin::Product Form */}
        <ProductForm />
        {/* end::Product Form */}
      </DialogContent>
    </Dialog>
  )
}

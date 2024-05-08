'use client'
import * as React from "react"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shelterSchema } from "@/schema/shelter.schema";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shelter } from "@prisma/client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Loader2, XCircle } from 'lucide-react';
import { Icons } from "@/components/icons";
import getDepatments from "@/lib/actions/getDepartments";
import getCities from "@/lib/actions/getCities";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

type UpdateShelterFormProps = {
  shelter: Shelter
  promises: Promise<{
    depatments: Awaited<ReturnType<typeof getDepatments>>
    cities: Awaited<ReturnType<typeof getCities>>
  }>
}

type ShelterUpdateForm = z.infer<typeof  shelterSchema>

export default  function ProfileShelterForm({shelter, promises} : UpdateShelterFormProps) {
  const form = useForm<z.infer<typeof shelterSchema>>({
    resolver: zodResolver(shelterSchema),
    defaultValues: {
      id: shelter.id || "",
      name: shelter.name || "",
      email: shelter.email || "",
      phoneNumber: shelter.phoneNumber || "",
      address: shelter.address || "",
      description: shelter.description || "",
      image_url: shelter.image_url || "",
      active: shelter.active || true,
      userId: shelter.userId || "",
      departmentId: shelter.departmentId.toString(),
      cityId: shelter.cityId.toString(),
    }
  })

  const { depatments, cities } = React.use(promises)

  const [image, setImage] = React.useState<string | null>(shelter?.image_url);
  const [imageIsDeletin, setImageIsDeleting] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false)

  React.useEffect(() => {
    if(typeof image === 'string'){
      form.setValue('image_url', image, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true
      })
    }
  }, [image]);

  function onSubmit(values: z.infer<typeof shelterSchema>) {
    //  setIsUpdating(true)
    alert(values.description)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex-1 flex flex-col gap-6">
          <FormField
            control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del Refugio</FormLabel>
                  <FormControl>
                    <Input placeholder="Escriba el nombre del refugio aquí" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Escriba el email del refugio aquí" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
            />

            <FormField
              control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefono</FormLabel>
                    <FormControl>
                      <Input placeholder="Escriba el telefono del refugio aquí" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Direccion</FormLabel>
                  <FormControl>
                    <Input placeholder="Escriba la direccion del refugio aquí" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
            )}
          />

          <FormField
            control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Refugio Descripcion</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Escriba la descripcion del refugio aquí" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image_url"
            render={({field}) => (
              <FormItem className="flex flex-col space-y-3">
                <FormLabel>Imagen Refugio</FormLabel>
                <FormControl>
                {image ?
                  <> 
                    <div className="relative max-w-[400px] min-w-[200px]  max-h-[400px] min-h-[200px] mt-4">
                      <Image
                        fill
                        src={image}
                        alt="Hotel Image"
                        className="object-contain"
                      />
                      <Button type="button" size='icon' variant='ghost' className="absolute right-[-12px] top-0">
                       {imageIsDeletin ? <Loader2/> : <XCircle/>}
                      </Button>
                    </div>
                  </>       
                  : 
                  <>
                    <div className="flex flex-col items-center max-w-[4000px] p-12 border-2 border-dashed border-primary/50 rounded mt-4">

                    </div>
                  </>
                  
                }
                </FormControl>
              </FormItem>
            )}
          />

        <div className="flex flex-col items-start gap-6 sm:flex-row">
        <FormField
            control={form.control}
            name="departmentId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Departamento</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue defaultValue={field.value} placeholder="Selecciona un departamento " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {depatments.map((option) => (
                        <SelectItem
                          key={option.id}
                          value={option.id.toString()}
                          className="capitalize"
                        >
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cityId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Ciudad</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue defaultValue={field.value} placeholder="Selecciona una ciudad" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {cities.map((option) => (
                        <SelectItem key={option.id} value={option.id.toString()}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

          <div className="flex space-x-2">
            <Button disabled={isUpdating}>
              {isUpdating && (
                <Icons.spinner
                  className="mr-2 size-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Actualizar Refugio
              <span className="sr-only">Update product</span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

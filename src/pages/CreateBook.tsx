import React, { useEffect } from "react";
import { useForm, type ControllerRenderProps } from "react-hook-form";
// import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import {
    useCreateBookMutation,
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "../redux/features/books/bookapi";
import { useNavigate, useParams } from "react-router";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

// Book data type
type BookFormData = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
};

// Genre options
const genres = [
  'FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'
];

const CreateBook = () => {
const navigate = useNavigate();
  const form = useForm<BookFormData>();

  // console.log(book);

  const [createBook, {isLoading: isUpdating}] = useCreateBookMutation();


  const onSubmit = async (data: BookFormData) => {
    // console.log("Form Data:", data);
    const bookData= {
        ...data,
        available:true
    }
    try {
      const res = await createBook(bookData).unwrap();
      console.log(res);
      if (res.data.success) {
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Book has been created successfully",
  showConfirmButton: false,
  timer: 1500
});
        navigate("/");
      }
    } catch (error) {
      toast.error(error.data.message)
      console.log(error);
    }


    // You can make API call here
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create Book
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <div className="space-y-6">
              {/* Title Field */}
              <FormField
                control={form.control}
                name="title"
                rules={{
                  required: "Book title is required",
                  minLength: {
                    value: 2,
                    message: "Book title must be at least 2 characters",
                  },
                }}
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<BookFormData, "title">;
                }) => (
                  <FormItem>
                    <FormLabel>Book Title *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter book title"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Author Field */}
              <FormField // FormField kii ?
                control={form.control}
                name="author"
                rules={{
                  required: "Author name is required",
                  minLength: {
                    value: 2,
                    message: "Author name must be at least 2 characters",
                  },
                }}
                render={(
                  { field } // render mane kii ?
                ) => (
                  <FormItem>
                    {/* FormItem kii ? FormItem o FormField er moddhe parthokko */}
                    <FormLabel>Author Name *</FormLabel>
                    <FormControl>
                      {/*  FormControl kii ?*/}
                      <Input
                        placeholder="Enter author name"
                        {...field} // field kii ? kotha theke asche ?
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Genre Field */}
              <FormField
                control={form.control}
                name="genre"
                rules={{
                  required: "Please select a genre",
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      {/* onValueChange={field.onChange} aita keno use korsi ?? kibujai aita dara ?? */}
                      <FormControl>
                        <SelectTrigger>
                          {/*SelectTrigger kii ?  */}
                          <SelectValue placeholder="Select book genre" />
                          {/* SelectValue kii ? */}
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {genres.map((genre) => (
                          <SelectItem key={genre} value={genre}>
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ISBN Field */}
              <FormField
                control={form.control}
                name="isbn"
                rules={{
                  required: "ISBN number is required",
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN Number *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter ISBN number (10 or 13 digits)"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                    {/* FormMessage kii ? */}
                  </FormItem>
                )}
              />

              {/* Description Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    {/* FormItem kii ? */}
                    <FormLabel>Description *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter book description..."
                        className="min-h-[100px]"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Copies Field */}
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Copies *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter number of copies"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 0)
                        }
                        // onChange keno use hoise ? field.onChange kii ? aii field er value 0 keno set kora jacche nah ?
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

             

              {/* Submit Button */}
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => form.reset()}>
                  Reset Form
                </Button>
                <Button
                  onClick={form.handleSubmit(onSubmit)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Create Book
                </Button>
              </div>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBook;

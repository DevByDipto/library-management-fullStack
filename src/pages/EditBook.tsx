import  { useEffect } from "react";
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
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "../redux/features/books/bookApi";
import { useNavigate, useParams } from "react-router";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetBookByIdQuery(id);
  const book = data?.data;
  // console.log("book title", book?.title);
  const form = useForm<BookFormData>({
    defaultValues: {
      // defaultValues nah dile kii hoto
      title: book?.title || "",
      author: book?.author || "",
      genre: book?.genre || "",
      isbn: book?.isbn || "",
      description: book?.description || "",
      copies: book?.copies || "",
      available: book?.available || "",
    },
  });

  useEffect(() => {
    if (book) {
      form.reset({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        description: book.description,
        copies: book.copies,
        available: book.available,
      });
    }
  }, [book, form]);

  // console.log(book);

  const [updateBook] = useUpdateBookMutation();

  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data: BookFormData) => {
    // console.log("Form Data:", data);
    try {
     const res =  await updateBook({id,...data}).unwrap();
     console.log(res);
     if(res.success){
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book information has been successfully submitted!",
        showConfirmButton: false,
        timer: 1500
      });

       navigate("/");
     }
     
    } catch (error) {
  if (error && typeof error === "object" && "data" in error) {
    const err = error as { data: { message: string } }
    toast.error(err.data.message)
  } else {
    toast.error("Something went wrong")
  }
}


    // You can make API call here
  };
  const copiesValue = form.watch("copies");
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Edit Book
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

              {/* Available Switch */}
              <FormField
                control={form.control}
                name="available"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Available</FormLabel>
                      <div className="text-sm text-muted-foreground">
                        Whether this book is currently available
                      </div>
                    </div>
                    <FormControl>
                      <Switch
                        checked={copiesValue > 0 ? field.value : false}
                   
                        onCheckedChange={(newCheckedValue) => {
                          if (newCheckedValue && copiesValue <= 0) {
                            toast.error('want to available true you should trune your copis value upon 0')
                          } else {
                            field.onChange(newCheckedValue);
                          } // aikhane newCheckedValue ta kii ? kotha theke ase aita ?
                        }}
                                          />
                    </FormControl>
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
                  Update Book
                </Button>
              </div>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBook;

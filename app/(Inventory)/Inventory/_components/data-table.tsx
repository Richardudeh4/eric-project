
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      DrugId: "#657899832",
      Name: "Paracetamol",
      Brand: "Emzor",
     Dosage: "240",
   
    },
    {
        DrugId: "#657899832",
        Name: "	flucytosine",
        Brand: "Ancobon Caps",
       Dosage: "80",
     
      },
      {
        DrugId: "#657899832",
        Name: "	nonsteroidal cream",
        Brand: "Atopiclair Cream",
       Dosage: "100",
     
      },
      {
        DrugId: "#657899832",
        Name: "	belimumab",
        Brand: "Benlysta",
       Dosage: "120",
     
      },
      {
        DrugId: "#657899832",
        Name: "	vandetanib",
        Brand: "Caprelsa",
       Dosage: "170",
     
      },
      {
        DrugId: "#657899832",
        Name: "	tadalafil",
        Brand: "Cialis",
       Dosage: "60",
     
      },
      {
        DrugId: "#657899832",
        Name: "	cobimetinib",
        Brand: "Cotellic",
       Dosage: "50",
     
      },
  ]
  
  export function DataTable() {
    return (
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Drug ID:</TableHead>
            <TableHead>Name:</TableHead>
            <TableHead>Brand:</TableHead>
            <TableHead className="text-right">Dosage (ml/g)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice,i) => (
            <TableRow key={i}>
              <TableCell className="font-medium text-[#009FE3]">{invoice.DrugId}</TableCell>
              <TableCell>{invoice.Name}</TableCell>
              <TableCell>{invoice.Brand}</TableCell>
             
              <TableCell className="text-right">{invoice.Dosage} {" "} ml/g</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  
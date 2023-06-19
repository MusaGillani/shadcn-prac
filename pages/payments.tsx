import { columns, Payment } from "@/components/payments/columns";
import { DataTable } from "@/components/payments/data-table";
import { GetStaticProps, NextPage } from "next";

const Payments: NextPage<{ Payments: Payment[] }> = ({ Payments }) => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={Payments} />
    </div>
  )
}

export default Payments

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      Payments: [
        {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
        },
        {
          id: "489e1d42",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
      ]
    }
  }
}
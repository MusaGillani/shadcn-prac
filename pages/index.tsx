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
          id: "489e1d41",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d42",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d43",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d44",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d45",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d46",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d47",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d48",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d49",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d50",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d51",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        {
          id: "489e1d52",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
      ]
    }
  }
}
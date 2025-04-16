'use client'

import React from 'react'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

export default function PaginationComponent() {
  return (
    <Pagination>

        <PaginationContent>

            <PaginationItem>
                <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationEllipsis />
            </PaginationItem>
            
            <PaginationItem>
                <PaginationNext href="#" />
            </PaginationItem>

        </PaginationContent>

    </Pagination>
  )
}

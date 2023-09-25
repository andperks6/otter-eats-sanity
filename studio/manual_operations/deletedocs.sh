#!/bin/bash

type=$1
for id in $(sanity documents query "*[_type=='$type'] {_id}" | jq -r '.[] |$
    sanity documents delete "$id"
done

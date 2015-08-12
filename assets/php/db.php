<?php

require_once 'config.php';

//Connect to MySQL database with the data stated above.
$dbLink = mysqli_connect($db_host, $db_user, $db_password, $db_database) or die('Error');

/**
 *
 * Function which executes a given query via the database
 *
 * @param $dbLink
 * @param $query
 * @return bool|mysqli_result|string
 */
function queryToDatabase($dbLink, $query)
{
    //If query is correct, result is true
    if ($result = mysqli_query($dbLink, $query)) {
        //Result of query returned
        return $result;
    } else {
        //Error message when mysqli_query == false
        return $error = mysqli_error($dbLink) . ' QUERY: ' . $query;
    }
}

//These comments, it just makes a really strong connection don't you think. Here we are, you and me, alone.
//I wrote these little pieces of grey matter specially for you, I know you're gonna read them some day and you
//will be thinking about me.
// Okay.. This is maybe a little bit creepy. Let me enlighten you with this beautiful function:

/**
 *
 * Function which returns the data from database and puts it in an array
 *
 * @param $result
 * @param int $config
 * @return array
 */
function queryToArray($result, $config = 0)
{
    //Create array
    $resultQuery = [];
    //Loop through every row and fetch the result
    while ($row = mysqli_fetch_assoc($result)) {
        if ($config == 1) {
            // If config 1 is given as parameter it will use the id from the database in the array.
            $resultQuery[$row['id']] = $row;
        } else {
            //Add row to array
            $resultQuery[] = $row;
        }
    }
    //Return array so we can use it.
    return $resultQuery;
}
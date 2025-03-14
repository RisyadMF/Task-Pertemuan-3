/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from "../models/users";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (title) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            const formattedUsers = users.map((users) => ({
                ... users,
                name: '${tittle} ${user.name}',
            }));
            resolve (formattedUsers);
        },   3000); // delay 3 detik
    });
};

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => user.name.toLowerCase() === name.toLowerCase());
            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not Founf"));
            }
        }, 2000); // delay 2 detik
    });
};

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (major) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredUser = users.filter((user) => user.major.toLowerCase() === major.toLowerCase());
            resolve(filteredUser);
        }, 4000); // delay 4 detik
    });
};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export {formatUser, findByName, filterByMajor };